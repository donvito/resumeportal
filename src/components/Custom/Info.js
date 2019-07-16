import React from 'react';
import { Descriptions, Typography } from 'antd';

const { Title } = Typography;

class Info extends React.Component {
  render() {
    
    return (
      <div>
       <Title level={3}>Additional Info</Title>   
       <Descriptions title="" bordered>
        <Descriptions.Item label="Notice Period" span={2}>Immediate</Descriptions.Item>
        <Descriptions.Item label="Location">Singapore</Descriptions.Item>
        <Descriptions.Item label="Willing to relocate" span={2}>No</Descriptions.Item>
        <Descriptions.Item label="Desired Salary(optional):">Not indicated</Descriptions.Item>       
       </Descriptions>
      </div>
    );
  }
}

export default Info