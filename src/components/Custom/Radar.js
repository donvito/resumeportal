import React from "react";
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

class Radar extends React.Component {
  render() {
    const { DataView } = DataSet;
    const data = [
      {
        item: "Leadership",
        Experience: 70,
        Interest: 30
      },
      {
        item: "Development",
        Experience: 60,
        Interest: 70
      },
      {
        item: "Agile / Scrum",
        Experience: 50,
        Interest: 60
      },
      {
        item: "Management",
        Experience: 40,
        Interest: 50
      },
      
      {
        item: "Startups",
        Experience: 70,
        Interest: 50
      },
      {
        item: "Technology",
        Experience: 50,
        Interest: 40
      },
      {
        item: "DevOps Automation",
        Experience: 30,
        Interest: 40
      },
      {
        item: "Developer Engagement",
        Experience: 60,
        Interest: 40
      },
      {
        item: "Enterprise Architecture",
        Experience: 50,
        Interest: 60
      }
    ];
    const dv = new DataView().source(data);
    dv.transform({
      type: "fold",
      fields: ["Experience", "Interest"],
      // 展开字段集
      key: "user",
      // key字段
      value: "score" // value字段
    });
    const cols = {
      score: {
        min: 0,
        max: 80
      }
    };
    const chartHeight = 600
    return (
      <div>
        <Title level={3}>Experience vs. Interest</Title>
        <Chart
          height={chartHeight}
          data={dv}
          padding={[20, 20, 95, 20]}
          scale={cols}
          forceFit
        >
          <Coord type="polar" radius={0.8} />
          <Axis
            name="item"
            line={null}
            tickLine={null}
            grid={{
              lineStyle: {
                lineDash: null
              },
              hideFirstLine: false
            }}
          />
          <Tooltip />
          <Axis
            name="score"
            line={null}
            tickLine={null}
            grid={{
              type: "polygon",
              lineStyle: {
                lineDash: null
              },
              alternateColor: "rgba(0, 0, 0, 0.04)"
            }}
          />
          <Legend name="user" marker="circle" offset={30} />
          <Geom type="area" position="item*score" color="user" />
          <Geom type="line" position="item*score" color="user" size={2} />
          <Geom
            type="point"
            position="item*score"
            color="user"
            shape="circle"
            size={4}
            style={{
              stroke: "#fff",
              lineWidth: 1,
              fillOpacity: 1
            }}
          />
        </Chart>
      </div>
    );
  }
}

export default Radar
