import React, { Component } from "react";
interface IComponentProps {
  value: string;
}

interface IComponentState {
  value: string;
}

export default class CustomDownloadCellRenderer extends Component<
  IComponentProps,
  IComponentState
> {
  constructor(props: IComponentProps) {
    super(props);

    this.state = {
      value: this.props.value,
    };
  }

  refresh(params: any) {
    if (params.value !== this.state.value) {
      this.setState({
        value: params.value,
      });
    }
    return true;
  }

  render() {
    return <div>Test Download</div>;
  }
}
