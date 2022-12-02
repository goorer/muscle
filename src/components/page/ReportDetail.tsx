import { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import { Menu, Report } from '../../utils/type';
import { Context } from '../../utils/customHook';

const tableLayout = css`
  width: 100%;
  border: 1px solid #e8e805;
  border-collapse: collapse;
`;

const tableCellLayout = css`
  padding: 5px;
  text-align: center;
  border: 1px solid #e8e805;
`;

const demoReport: Report = {
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
};

export default function ReportDetail() {
  const [fadeout, setFadeout] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 10px;
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
          ${fadeout
            ? 'animation: fadebottomout 1s cubic-bezier(0.33, 1, 0.68, 1);'
            : ''}
          @keyframes fadebottomout {
            0% {
              transform: translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateY(200px);
            }
          }
        `}
        onClick={() => {
          setFadeout(true);
        }}
        onAnimationEnd={() => {
          context.close();
          navigate('/report/list');
        }}
      >
        Close
      </button>
      <label
        css={css`
          ${fadeout
            ? 'animation: fadebottomout 1s cubic-bezier(0.33, 1, 0.68, 1);'
            : ''}
          @keyframes fadebottomout {
            0% {
              transform: translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateY(200px);
            }
          }
        `}
      >
        {demoReport.date}
      </label>
      <div
        css={css`
          ${fadeout
            ? 'animation: fadebottomout 1s cubic-bezier(0.33, 1, 0.68, 1);'
            : ''}
          @keyframes fadebottomout {
            0% {
              transform: translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateY(200px);
            }
          }
        `}
      >
        <table css={tableLayout}>
          <thead>
            <tr>
              <th css={tableCellLayout}>No.</th>
              <th css={tableCellLayout}>種目</th>
              <th css={tableCellLayout}>負荷</th>
              <th css={tableCellLayout}>回数</th>
              <th css={tableCellLayout}>セット数</th>
            </tr>
          </thead>
          <tbody>
            {demoReport.menus.map((menu: Menu, index: number) => {
              return (
                <tr key={index.toString()}>
                  <td css={tableCellLayout}>{index + 1}</td>
                  <td css={tableCellLayout}>{menu.lift}</td>
                  <td css={tableCellLayout}>{menu.resistance}</td>
                  <td css={tableCellLayout}>{menu.count}</td>
                  <td css={tableCellLayout}>{menu.sets}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
