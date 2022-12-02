import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { Menu, Report } from '../../utils/type';
import { Context } from '../../utils/customHook';

export default function Column(props: { report: Report }) {
  const report = props.report;
  const navigate = useNavigate();
  const context = useContext(Context);
  if (!report) {
    return <div>No Report</div>;
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 5px;
      `}
    >
      <label>{report.date}</label>
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
          context.open();
          navigate(`./detail/${report.id}`);
        }}
      >
        TrainingMenu
      </button>
    </div>
  );
}
