import React from 'react';
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Column3D = ({ data }) => {
  const chartConfigs = {
    type: "column3d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      /* see data tab */
      chart: {
        caption: "Most Popular",
        yAxisName: "Stars",
        xAxisName: "Repos",
        xAxisNameFontSize: "16px",
        yAxisNameFontSize: "16px",
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Column3D;