import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { css } from '@emotion/react';

type Login = {
  userID: string;
  password: string;
};

const initialUserInfo: Login = {
  userID: '',
  password: '',
};

export default function Login() {
  const [userInfo, setUserInfo] = useState<Login>(initialUserInfo);
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    setUserInfo({ ...userInfo, [name]: e.currentTarget.value });
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        animation: fadein 1s cubic-bezier(0.33, 1, 0.68, 1);
        @keyframes fadein {
          0% {
            transform: translateY(-1500px);
          }
          100%{
            transform: translateY(0);
          }
      `}
    >
      <input
        css={css`
          margin: 10px;
          color: #FFFFFF;
          background: #000000;
          border: none;
          width: 400px;
          ::placeholder {
            color: lightgray;
          }
          :focus {
            outline: none;
            border-bottom: 2px solid #e8e805;
          }
          ${
            fade
              ? 'animation: fadeupout 3s cubic-bezier(0.33, 1, 0.68, 1);'
              : ''
          }
          @keyframes fadeupout {
          0% {
            transform: translateY(0);
          }
          100%{
            transform: translateY(-1500px);
          }
        `}
        name="userID"
        type="text"
        value={userInfo.userID}
        placeholder="id"
        onChange={(e) => handleChange(e)}
      />
      <input
        css={css`
          margin: 10px;
          color: #FFFFFF;
          background: #000000;
          border: none;
          width: 400px;
          ::placeholder {
            color: lightgray;
          }
          :focus {
            outline: none;
            border-bottom: 2px solid #e8e805;
          }
          ${
            fade
              ? 'animation: fadeupout 3s cubic-bezier(0.33, 1, 0.68, 1);'
              : ''
          }
          @keyframes fadeupout {
          0% {
            transform: translateY(0);
          }
          100%{
            transform: translateY(-1500px);
          }
        `}
        name="password"
        type="password"
        value={userInfo.password}
        placeholder="password"
        onChange={(e) => handleChange(e)}
      />
      <button
        css={css`
          width: 120px;
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
          ${
            fade
              ? 'animation: fadeupout 3s cubic-bezier(0.33, 1, 0.68, 1);'
              : ''
          }
          @keyframes fadeupout {
          0% {
            transform: translateY(0);
          }
          100%{
            transform: translateY(-1500px);
          }
        `}
        onClick={() => {
          setFade(true);
        }}
        onAnimationEnd={() => navigate('/report/list')}
      >
        GO
      </button>
      <ThreeCircles
        height="100"
        width="100"
        color="#e8e805"
        wrapperStyle={{}}
        wrapperClass=""
        visible={fade}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
}
