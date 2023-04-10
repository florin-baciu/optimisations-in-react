import Plot from "react-plotly.js";

const Chart = ({ graphData }: { graphData: any }) => {
  return (
    <Plot
      data={[
        {
          type: "surface",
          colorscale: "Plasma",
          x: graphData.x,
          y: graphData.y,
          z: graphData.z,
        },
      ]}
      layout={{
        paper_bgcolor: "transparent",
        width: 700,
        height: 700,
        margin: {
          l: 50,
          r: 50,
          b: 80,
          t: 90,
        },
        title: graphData.masterGraph.title,
        // annotations: [
        //   {
        //     text: graphData.masterGraph.model,
        //     font: {
        //       size: 14,
        //       color: "#fff",
        //     },
        //     showarrow: false,
        //     align: "center",
        //     x: 0.5,
        //     y: 1.1,
        //     xref: "paper",
        //     yref: "paper",
        //   },
        // ],
        scene: {
          xaxis: {
            title: graphData.masterGraph.xAxis,
            titlefont: {
              family: "Courier New, monospace",
              size: 12,
              color: "#fff",
            },
          },
          yaxis: {
            title: graphData.masterGraph.yAxis,
            titlefont: {
              family: "Courier New, monospace",
              size: 12,
              color: "#fff",
            },
          },
          zaxis: {
            title: graphData.masterGraph.zAxis,
            titlefont: {
              family: "Courier New, monospace",
              size: 12,
              color: "#fff",
            },
          },
        },
      }}
    />
  );
};

export default Chart;
