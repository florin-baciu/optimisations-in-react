import { Button, Form, Input, Select } from "antd";
import { useState } from "react";

import Chart from "@/components/Chart";
import { utils } from "@/utils";

import "./index.scss";

interface EngineMap {
  z: number[][];
  x: number[];
  y: number[];
  masterGraph: {
    yAxis: string;
    xAxis: string;
    zAxis: string;
  };
}

const CalculatorPage = () => {
  const [graphData, setGraphData] = useState<EngineMap | null>(null);
  const [newGraphData, setNewGraphData] = useState<EngineMap | null>(null);

  const [form] = Form.useForm();

  const { enhanceMap } = utils.FUNCTIONS;

  function readSingleFile(e: Event) {
    const element = e.target as HTMLInputElement;

    let file = element.files as FileList | null;

    if (!file) return;

    var reader = new FileReader();
    reader.onload = function (e) {
      var contents = e?.target?.result;
      console.log(JSON.parse(contents as string));
      setGraphData(JSON.parse(contents as string));
    };
    reader.readAsText(file[0]);
  }

  return (
    <div className="p-calculator-page">
      <div className="p-calculator-page__content">
        <div className="p-calculator-page__content-controls">
          <Form form={form} className="p-calculator-page__content-form">
            <Form.Item name="engineSeries">
              <Input />
            </Form.Item>
            <Form.Item name="mapType">
              <Select
                options={[
                  {
                    value: "bypassMap",
                    label: "Bypass valve solenoid command",
                  },
                  { value: "correctionMap", label: "Correction Map" },
                ]}
              />
            </Form.Item>
          </Form>
          {/**@ts-ignore */}
          <input onChange={readSingleFile} type="file"></input>
          <Button
            className="p-calculator-page__content-controls-button"
            onClick={() => {
              if (graphData) setNewGraphData(enhanceMap(graphData));
            }}
            type="primary"
          >
            Generate New Map
          </Button>
        </div>
        {graphData && <Chart graphData={graphData} />}
        {newGraphData && <Chart graphData={newGraphData} />}
      </div>
    </div>
  );
};

export default CalculatorPage;
