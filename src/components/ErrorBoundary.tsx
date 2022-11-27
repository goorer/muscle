import { Component, ErrorInfo, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncauht error: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Somthing went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
