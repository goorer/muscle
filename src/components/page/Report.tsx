import { ChangeEvent, MouseEvent, useState } from 'react';
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

type ExMenu = {
  id: string;
  menu: Menu;
};

const tableLayout = css`
  border: 1px solid #e8e805;
  border-collapse: collapse;
`;

const tableCellLayout = (width: string) => css`
  width: ${width};
  padding: 5px;
  text-align: center;
  border: 1px solid #e8e805;
`;

const inputLayout = (width: string) =>
  css`
    margin: 10px;
    color: #ffffff;
    background: #000000;
    border: none;
    border-bottom: 2px solid #e8e805;
    width: ${width};
    font-weight: bold;
    ::placeholder {
      color: lightgray;
    }
    :focus {
      outline: none;
      border-bottom: 2px solid #e8e805;
    }
  `;

function fakeId(length: number): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-?!.0123456789';
  const characterLength = characters.length;
  let fakeID = '';
  for (let i = 0; i < length; i++) {
    fakeID += characters.charAt(Math.floor(Math.random() * characterLength));
  }
  return fakeID;
}

export default function NewReport() {
  const [menu, setMenu] = useState<Menu>(initialMenu);
  const [exMenu, setExMenu] = useState<Array<ExMenu>>([]);
  const [report, setReport] = useState<Report>(initialRepost);
  const navigate = useNavigate();

  const handleChangeMenu = (e: ChangeEvent<HTMLInputElement>): void => {
    const name: string = e.currentTarget.name;
    console.log(`handleChangeMenu: ${name}: ${e.currentTarget.value}`);
    setMenu({ ...menu, [name]: e.currentTarget.value });
  };

  const handleClickPushMenu = (): void => {
    const getFakeId = (existingIdList: Array<string>): string => {
      let newID = '';
      while (true) {
        newID = fakeId(6);
        if (!existingIdList.includes(newID)) {
          break;
        }
      }
      return newID;
    };
    const id = getFakeId(
      exMenu.map((content: ExMenu) => {
        return content.id;
      })
    );
    const afPushExMenu: Array<ExMenu> = exMenu.concat({ id: id, menu: menu });
    setExMenu(afPushExMenu);
    setMenu(initialMenu);
  };

  const handleClickRemoveMenu = (e: MouseEvent<HTMLButtonElement>): void => {
    const id = e.currentTarget.name;
    const afRemoveExMenu: Array<ExMenu> = exMenu.filter(
      (content: ExMenu) => content.id !== id
    );
    setExMenu(afRemoveExMenu);
  };

  const handleClickCreateReport = () => {
    const newMenus: Array<Menu> = exMenu.map((content: ExMenu) => {
      return {
        lift: content.menu.lift,
        resistance: content.menu.resistance,
        count: content.menu.count,
        sets: content.menu.sets,
      };
    });
    setReport({ ...report, menus: newMenus });
  };

  return (
    <div
      css={css`
        padding: 10px;
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
        `}
        onClick={() => navigate('../list')}
      >
        Back
      </button>
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
              css={inputLayout('150px')}
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
                  css={inputLayout('300px')}
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
                  padding-bottom: 5px;
                `}
              >
                <label>
                  負荷:
                  <input
                    css={inputLayout('50px')}
                    name="resistance"
                    type="number"
                    value={menu.resistance}
                    onChange={(e) => handleChangeMenu(e)}
                  />
                </label>
                <label>
                  回数:
                  <input
                    css={inputLayout('50px')}
                    name="count"
                    type="number"
                    value={menu.count}
                    onChange={(e) => handleChangeMenu(e)}
                  />
                </label>
                <label>
                  セット数:
                  <input
                    css={inputLayout('50px')}
                    name="sets"
                    type="number"
                    value={menu.sets}
                    onChange={(e) => handleChangeMenu(e)}
                  />
                </label>
                <button
                  css={css`
                    width: 100px;
                    height: 40px;
                    font-weight: bold;
                    color: #000000;
                    background: #e8e805;
                    border: 5px solid #000000;
                    border-radius: 3px;
                    :hover {
                      color: #000000;
                      background: #e8e805;
                      border: 1px solid #e8e805;
                    }
                  `}
                  onClick={handleClickPushMenu}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <div
            css={css`
              width: 800px;
              height: 500px;
              overflow: auto;
            `}
          >
            <table css={tableLayout}>
              <thead>
                <tr>
                  <th css={tableCellLayout('30px')}>No.</th>
                  <th css={tableCellLayout('300px')}>種目</th>
                  <th css={tableCellLayout('80px')}>負荷</th>
                  <th css={tableCellLayout('80px')}>回数</th>
                  <th css={tableCellLayout('90px')}>セット数</th>
                  <th css={tableCellLayout('100px')}></th>
                </tr>
              </thead>
              <tbody>
                {!exMenu ? (
                  <tr></tr>
                ) : (
                  exMenu.map((content: ExMenu, index: number) => {
                    return (
                      <tr key={content.id}>
                        <td css={tableCellLayout('20px')}>{index + 1}</td>
                        <td css={tableCellLayout('100px')}>
                          {content.menu.lift}
                        </td>
                        <td css={tableCellLayout('30px')}>
                          {content.menu.resistance}
                        </td>
                        <td css={tableCellLayout('30px')}>
                          {content.menu.count}
                        </td>
                        <td css={tableCellLayout('30px')}>
                          {content.menu.sets}
                        </td>
                        <td css={tableCellLayout('30px')}>
                          <button
                            css={css`
                              width: 100px;
                              height: 40px;
                              font-weight: bold;
                              color: #000000;
                              background: #e8e805;
                              border: 5px solid #000000;
                              border-radius: 3px;
                              :hover {
                                color: #000000;
                                background: #e8e805;
                                border: 1px solid #e8e805;
                              }
                            `}
                            name={content.id}
                            onClick={(e) => handleClickRemoveMenu(e)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
        <button
          css={css`
            width: 100px;
            height: 40px;
            ${exMenu.length === 0
              ? ''
              : `font-weight: bold;
                color: #000000;
                background: #e8e805;
                border: 5px solid #000000;
                border-radius: 3px;
                :hover {
                  color: #000000;
                  background: #e8e805;
                  border: 1px solid #e8e805;
                }`}
          `}
          disabled={exMenu.length === 0}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
