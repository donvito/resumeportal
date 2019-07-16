import React from "react";
import ReactDOM from 'react-dom';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";
import DataSet from "@antv/data-set";
import { Typography } from 'antd';

const { Title } = Typography;

class Grouped extends React.Component {
  render() {
    const data = [
      {
        label: "Java",
        ExperienceLevel: 9,
      },
      {
        label: "Go",
        ExperienceLevel: 4,
      },
      {
        label: "Docker",
        ExperienceLevel: 8,
      },
      {
        label: "React",
        ExperienceLevel: 2,
      },
      {
        label: "GraphQL",
        ExperienceLevel: 1,
      }
    ];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["ExperienceLevel"],
      // 展开字段集
      key: "type",
      // key字段
      value: "value" // value字段
    });
    return (
      <div>
        <Title level={3}>Self-assessment</Title>
        <Chart height={400} data={dv} forceFit>
          <Legend />
          <Coord transpose scale={[1, -1]} />
          <Axis
            name="label"
            label={{
              offset: 12
            }}
          />
          <Axis name="value" position={"right"} />
          <Tooltip />
          <Geom
            type="interval"
            position="label*value"
            color={"type"}
            adjust={[
              {
                type: "dodge",
                marginRatio: 1 / 32
              }
            ]}
          />
        </Chart>
      </div>
    );
  }
}

export default Grouped
