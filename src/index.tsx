import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Global, css } from '@emotion/react';

import App from './App';
import NewReport from './components/page/Report';
import ReportList from './components/page/ReportList';
import ReportDetail from './components/page/ReportDetail';
import ErrorBoundary from './components/ErrorBoundary';
import RouteErrorBoudary from './components/RouteErrorBoudary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RouteErrorBoudary />,
  },
  {
    path: '/report',
    errorElement: <RouteErrorBoudary />,
    children: [
      {
        path: 'new',
        element: <NewReport />,
      },
      {
        path: 'list',
        element: <ReportList />,
      },
      {
        path: 'detail/:id',
        element: <ReportDetail />,
      },
    ],
  },
]);

const Index = () => {
  return (
    <StrictMode>
      <ErrorBoundary>
        <Global
          styles={css`
            html,
            body,
            div,
            span,
            object,
            iframe,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            blockquote,
            pre,
            abbr,
            address,
            cite,
            code,
            del,
            dfn,
            em,
            img,
            ins,
            kbd,
            q,
            samp,
            small,
            strong,
            sub,
            sup,
            var,
            b,
            i,
            dl,
            dt,
            dd,
            ol,
            ul,
            li,
            fieldset,
            form,
            label,
            legend,
            table,
            caption,
            tbody,
            tfoot,
            thead,
            tr,
            th,
            td,
            article,
            aside,
            canvas,
            details,
            figcaption,
            figure,
            footer,
            header,
            hgroup,
            menu,
            nav,
            section,
            summary,
            time,
            mark,
            audio,
            video {
              margin: 0;
              padding: 0;
              border: 0;
              outline: 0;
              font-size: 100%;
              vertical-align: baseline;
              background: transparent;
              font-size: medium;
            }

            body {
              line-height: 1;
            }

            article,
            aside,
            details,
            figcaption,
            figure,
            footer,
            header,
            hgroup,
            menu,
            nav,
            section {
              display: block;
            }

            nav ul {
              list-style: none;
            }

            blockquote,
            q {
              quotes: none;
            }

            blockquote:before,
            blockquote:after,
            q:before,
            q:after {
              content: '';
              content: none;
            }

            a {
              margin: 0;
              padding: 0;
              font-size: 100%;
              vertical-align: baseline;
              background: transparent;
            }

            /* change colours to suit your needs */
            ins {
              background-color: #ff9;
              color: #000;
              text-decoration: none;
            }

            /* change colours to suit your needs */
            mark {
              background-color: #ff9;
              color: #000;
              font-style: italic;
              font-weight: bold;
            }

            del {
              text-decoration: line-through;
            }

            abbr[title],
            dfn[title] {
              border-bottom: 1px dotted;
              cursor: help;
            }

            table {
              border-collapse: collapse;
              border-spacing: 0;
            }

            /* change border colour to suit your needs */
            hr {
              display: block;
              height: 1px;
              border: 0;
              border-top: 1px solid #cccccc;
              margin: 1em 0;
              padding: 0;
            }

            input,
            select {
              vertical-align: middle;
            }

            html,
            body,
            #root {
              height: 100%;
            }
          `}
        />
        <RouterProvider router={router} />
      </ErrorBoundary>
    </StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Index />
);
