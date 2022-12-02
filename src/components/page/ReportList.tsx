import { useState, useContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Column from './Column';
import { Report } from '../../utils/type';
import { Context } from '../../utils/customHook';

const demoRep: Report[] = [
  {
    id: 1,
    date: '2022/10/1',
    menus: [
      {
        lift: 'Lift-A',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        lift: 'Lift-B',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        lift: 'Lift-C',
        resistance: 50,
        count: 10,
        sets: 3,
      },
    ],
  },
  {
    id: 2,
    date: '2022/10/15',
    menus: [
      {
        lift: 'Lift-A',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        lift: 'Lift-B',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        lift: 'Lift-C',
        resistance: 50,
        count: 10,
        sets: 3,
      },
    ],
  },
  {
    id: 3,
    date: '2022/10/10',
    menus: [
      {
        lift: 'Lift-A',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        lift: 'Lift-B',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        lift: 'Lift-C',
        resistance: 50,
        count: 10,
        sets: 3,
      },
    ],
  },
  {
    id: 4,
    date: '2022/09/30',
    menus: [
      {
        lift: 'Lift-A',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        lift: 'Lift-B',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        lift: 'Lift-C',
        resistance: 50,
        count: 10,
        sets: 3,
      },
    ],
  },
  {
    id: 5,
    date: '2022/09/29',
    menus: [
      {
        lift: 'Lift-A',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        lift: 'Lift-B',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        lift: 'Lift-C',
        resistance: 50,
        count: 10,
        sets: 3,
      },
    ],
  },
];

export default function ReportList() {
  const navigate = useNavigate();
  const context = useContext(Context);
  return (
    <div
      css={css`
        height: 100%;
        animation: slideinlist 1s cubic-bezier(0.33, 1, 0.68, 1);
        @keyframes slideinlist {
          0% {
            opacity: 0;
            transform: translateY(300px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          gap: 5px;
          padding: 10px;
        `}
      >
        <button
          css={css`
            width: 200px;
            height: 40px;
            font-weight: bold;
            color: #000000;
            background: #b20db5;
            border: 5px solid #000000;
            border-radius: 3px;
            :hover {
              color: #000000;
              background: #b20db5;
              border: 1px solid #b20db5;
            }
          `}
          onClick={() => {
            context.close();
            navigate(`../new`);
          }}
        >
          New
        </button>
        <button
          css={css`
            width: 200px;
            height: 40px;
            font-weight: bold;
            color: #000000;
            background: #b20db5;
            border: 5px solid #000000;
            border-radius: 3px;
            :hover {
              color: #000000;
              background: #b20db5;
              border: 1px solid #b20db5;
            }
          `}
          onClick={() => {
            context.close();
            navigate('/');
          }}
        >
          End
        </button>
      </div>
      <div
        css={css`
          height: ${context.state.heightPercent};
          overflow: auto;
        `}
      >
        <ul
          css={css`
            list-style: none;
            padding: 10px;
          `}
        >
          {[...demoRep]
            .concat([...demoRep])
            .sort(
              (report1: Report, report2: Report) =>
                new Date(report1.date).getTime() -
                new Date(report2.date).getTime()
            )
            .map((report: Report) => {
              return (
                <li
                  css={css`
                    padding: 10px;
                  `}
                  key={report.id}
                >
                  <Column report={report} />
                </li>
              );
            })}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
