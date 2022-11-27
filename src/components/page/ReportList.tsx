import { Outlet, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Column from './Column';
import { Report } from '../../utils/type';

const demoRep: Report[] = [
  {
    id: 1,
    date: '2022/10/1',
    menus: [
      {
        id: 1,
        lift: 'Lift-A',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        id: 2,
        lift: 'Lift-B',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        id: 3,
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
        id: 1,
        lift: 'Lift-A',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        id: 2,
        lift: 'Lift-B',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        id: 3,
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
        id: 1,
        lift: 'Lift-A',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        id: 2,
        lift: 'Lift-B',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        id: 3,
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
        id: 1,
        lift: 'Lift-A',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        id: 2,
        lift: 'Lift-B',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        id: 3,
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
        id: 1,
        lift: 'Lift-A',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        id: 2,
        lift: 'Lift-B',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        id: 3,
        lift: 'Lift-C',
        resistance: 50,
        count: 10,
        sets: 3,
      },
    ],
  },
  {
    id: 6,
    date: '2022/09/27',
    menus: [
      {
        id: 1,
        lift: 'Lift-A',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        id: 2,
        lift: 'Lift-B',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        id: 3,
        lift: 'Lift-C',
        resistance: 50,
        count: 10,
        sets: 3,
      },
    ],
  },
  {
    id: 7,
    date: '2022/10/12',
    menus: [
      {
        id: 1,
        lift: 'Lift-A',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        id: 2,
        lift: 'Lift-B',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        id: 3,
        lift: 'Lift-C',
        resistance: 50,
        count: 10,
        sets: 3,
      },
    ],
  },
  {
    id: 8,
    date: '2022/09/25',
    menus: [
      {
        id: 1,
        lift: 'Lift-A',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        id: 2,
        lift: 'Lift-B',
        resistance: 50,
        count: 10,
        sets: 3,
      },
      {
        id: 3,
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
  return (
    <div
      css={css`
        height: 100%;
      `}
    >
      <button onClick={() => navigate(`../new`)}>New</button>
      <ul
        css={css`
          list-style: none;
          padding: 10px;
        `}
      >
        {[...demoRep]
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
      <Outlet />
    </div>
  );
}
