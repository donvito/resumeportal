import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Piecolumn from '../components/Custom/PieColumn.js'
import Grouped from '../components/Custom/Histogram.js'
import Radar from '../components/Custom/Radar.js'
import TopSkills from '../components/Custom/TopSkills.js'
import About from '../components/Custom/About.js'

import 'antd/dist/antd.css';
import { Row, Col, Tag, Typography, Timeline } from 'antd';
import RecentExperience from '@/components/Custom/RecentExperience.js';

const { Title } = Typography;

export default () => (
  <PageHeaderWrapper>
    <div>
      <About />
      <br /><br /><br />
      <Row >
        <Col span={12}>
          <TopSkills />
          <br /><br /><br />
          <Grouped />
        </Col>

        <Col span={12}>          
          <Piecolumn />
        </Col>
      </Row>

      <Row >
        <Col span={12}>
          <RecentExperience />
        </Col>

        <Col span={12}>
          <Radar />
        </Col>
      </Row>
    </div>
  </PageHeaderWrapper>
);
