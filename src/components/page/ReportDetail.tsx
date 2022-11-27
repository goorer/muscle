import { useNavigate, useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import { Menu, Report } from '../../utils/type';

const tableLayout = css`
  table-layout: auto;
  width: 100%;
  heigth: 300px;
  border: 1px solid black;
  border-collapse: collapse;
`;

const tableCellLayout = css`
  border: 1px solid black;
`;

const demoReport: Report = {
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
};

export default function ReportDetail() {
  const navigate = useNavigate();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 10px;
      `}
    >
      {demoReport.date}
      <div>
        メニュー
        <table css={tableLayout}>
          <thead>
            <tr>
              <th css={tableCellLayout}>種目</th>
              <th css={tableCellLayout}>負荷</th>
              <th css={tableCellLayout}>回数</th>
              <th css={tableCellLayout}>セット数</th>
            </tr>
          </thead>
          <tbody>
            {demoReport.menus.map((menu: Menu, index) => {
              return (
                <tr key={menu.lift + index.toString()}>
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
      <button onClick={() => navigate('/report/list')}>close</button>
    </div>
  );
}
