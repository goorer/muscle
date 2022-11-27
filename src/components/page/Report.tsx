import { MouseEvent, ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

import { Menu, Report } from '../../utils/type';

const dateToString = (date: Date): string => {
  const formatDate = date
    .toLocaleDateString('jp-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .split('/')
    .join('-');
  return formatDate;
};

const initialMenu: Menu = {
  id: 1,
  lift: '',
  resistance: 0,
  count: 0,
  sets: 0,
};
const initialRepost: Report = {
  id: 0,
  date: dateToString(new Date()),
  menus: [],
};

const tableLayout = css`
  table-layout: auto;
  wnameth: 100%;
  heigth: 300px;
  border: 1px solid black;
  border-collapse: collapse;
`;

const tableCellLayout = css`
  text-align: center;
  border: 1px solid black;
`;

export default function NewReport() {
  const [menu, setMenu] = useState<Menu>(initialMenu);
  const [report, setReport] = useState<Report>(initialRepost);
  const navigate = useNavigate();

  const handleChangeMenu = (e: ChangeEvent<HTMLInputElement>): void => {
    const name: string = e.currentTarget.name;
    console.log(`handleChangeMenu: ${name}: ${e.currentTarget.value}`);
    setMenu({ ...menu, [name]: e.currentTarget.value });
  };

  const handleClickPushMenu = (): void => {
    const newMenus = report.menus.concat(menu);
    setReport({ ...report, menus: newMenus });
    setMenu(initialMenu);
  };

  const handleClickRemoveMenu = (e: MouseEvent<HTMLButtonElement>): void => {
    if (report.menus.length === 1) {
      setReport({ ...report, menus: [] });
    } else {
      const newMenus = report.menus.filter(
        (menu) => menu.id !== parseInt(e.currentTarget.name)
      );
      setReport({ ...report, menus: newMenus });
    }
  };

  return (
    <div>
      <button onClick={() => navigate('../list')}>Back</button>
      <div
        css={css`
          padding: 20px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <label
            css={css`
              margin-bottom: 10px;
            `}
          >
            Date:
            <input
              type="date"
              value={report.date}
              onChange={(e) =>
                setReport({ ...report, date: e.currentTarget.value })
              }
            />
          </label>
          <div
            css={css`
              margin-bottom: 10px;
            `}
          >
            <label>Menu</label>
            <div
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
              <label
                css={css`
                  margin-bottom: 10px;
                `}
              >
                種目:
                <input
                  name="lift"
                  type="text"
                  value={menu.lift}
                  onChange={(e) => handleChangeMenu(e)}
                />
              </label>
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  align-content: center;
                  gap: 5px;
                `}
              >
                <label>
                  負荷:
                  <input
                    name="resistance"
                    type="number"
                    value={menu.resistance}
                    onChange={(e) => handleChangeMenu(e)}
                  />
                </label>
                <label>
                  回数:
                  <input
                    name="count"
                    type="number"
                    value={menu.count}
                    onChange={(e) => handleChangeMenu(e)}
                  />
                </label>
                <label>
                  セット数:
                  <input
                    name="sets"
                    type="number"
                    value={menu.sets}
                    onChange={(e) => handleChangeMenu(e)}
                  />
                </label>
                <button onClick={handleClickPushMenu}>追加</button>
              </div>
            </div>
          </div>
          <table css={tableLayout}>
            <thead>
              <tr>
                <th css={tableCellLayout}>種目</th>
                <th css={tableCellLayout}>負荷</th>
                <th css={tableCellLayout}>回数</th>
                <th css={tableCellLayout}>セット数</th>
                <th css={tableCellLayout}></th>
              </tr>
            </thead>
            <tbody>
              {report.menus.map((menu: Menu) => {
                return (
                  <tr key={menu.id}>
                    <td css={tableCellLayout}>{menu.lift}</td>
                    <td css={tableCellLayout}>{menu.resistance}</td>
                    <td css={tableCellLayout}>{menu.count}</td>
                    <td css={tableCellLayout}>{menu.sets}</td>
                    <td css={tableCellLayout}>
                      <button
                        name={menu.id.toString()}
                        onClick={(e) => handleClickRemoveMenu(e)}
                      >
                        削除
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button>登録</button>
      </div>
    </div>
  );
}
