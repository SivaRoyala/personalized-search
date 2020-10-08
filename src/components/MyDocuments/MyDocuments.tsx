import React, { Component } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";
import { jsonResponse } from "../../services/fakeData";
import CustomDownloadCellRenderer from "./CustomDownloadCellRenderer";
import CustomDocumentCellRenderer from "./CustomDocumentCellRenderer";
interface IComponentProps {
  value: string;
}

interface IComponentState {
  showDesModel: boolean;
  displayData: Object;
  columnDefs: any;
  frameworkComponents: any;
  rowData: any;
  rowSelection: string;
  paginationPageSize: number;
  paginationNumberFormatter: any;
}
class MyDocuments extends Component<IComponentProps, IComponentState> {
  constructor(props: IComponentProps) {
    super(props);
    this.state = {
      //modules: [ClientSideRowModelModule],
      showDesModel: false,
      displayData: Object,
      columnDefs: [
        {
          headerName: "",
          field: "",
          width: 90,
          cellRenderer: "customDownloadCellRenderer",
        },
        {
          headerName: "Title",
          field: "title",
          sortable: true,
          filter: true,
          cellRenderer: function (params: any) {
            return '<a href="#" >' + params.value + "</a>";
          },
          onCellClicked: this.documentInfo,
        },
        { headerName: "Type", field: "type" },
        {
          headerName: "File",
          field: "fileName",
          cellRenderer: "customDocumentCellRenderer",
        },
      ],
      frameworkComponents: {
        customDownloadCellRenderer: CustomDownloadCellRenderer,
        customDocumentCellRenderer: CustomDocumentCellRenderer,
      },
      rowData: jsonResponse.data.documents,
      rowSelection: "single",
      paginationPageSize: 5,
      paginationNumberFormatter: function (params: any) {
        return "[" + params.value.toLocaleString() + "]";
      },
    };
  }

  documentInfo = (params: any) => {
    //const selectedRows = params.node.rowIndex;
    const test = params.data.title;
    this.setState({
      showDesModel: !this.state.showDesModel,
      displayData: params.data,
    });
  };

  onGridReady = (params: any) => {
    let gridApi = params.api;
    let gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
    let element = document.querySelector("#selectedRows");
    if (element != null) {
      element.innerHTML = gridApi.getModel().getRowCount();
    }
  };

  handleChildClick = (event: any) => {
    this.setState({ showDesModel: !this.state.showDesModel });
  };

  render() {
    return (
      <div>
        Total :
        <span
          style={{ marginLeft: "5px", marginRight: "5px" }}
          id="selectedRows"
        ></span>
        records
        <div
          className="ag-theme-alpine-dark"
          style={{ height: "350px", width: "100%" }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            rowSelection={this.state.rowSelection}
            onGridReady={this.onGridReady}
            frameworkComponents={this.state.frameworkComponents}
            pagination={true}
            paginationPageSize={this.state.paginationPageSize}
            paginationNumberFormatter={this.state.paginationNumberFormatter}
          ></AgGridReact>
        </div>
      </div>
    );
  }
}
export default MyDocuments;
