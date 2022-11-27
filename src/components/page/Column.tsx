import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { Menu, Report } from '../../utils/type';

export default function Column(props: { report: Report }) {
  const report = props.report;
  const navigate = useNavigate();
  if (!report) {
    return <div>No Report</div>;
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      {report.date}
      <button onClick={() => navigate(`../detail/${report.id}`)}>
        TrainingMenu
      </button>
    </div>
  );
}
