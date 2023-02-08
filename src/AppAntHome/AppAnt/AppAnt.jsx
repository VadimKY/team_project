import React, {useState} from "react";
import { Layout, Row, Col, Typography, Slider  } from 'antd';
import s from './AppAnt.module.css';
import Table from "../Table/Table";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

//const Staled = staled.div`
//.header,
//.footer {
//  bac
//}
//`
const AppAnt = () => {
      const [rows, setrows] = useState(10)
    return (
        <Layout>
            <Header className= {s.header}>
                Header
            </Header>
            <Content>
                <Row>
                    <Col xs={24} md={{span: 16, offset: 4}}>
                        <Slider min={1} max={100} defaultValue={rows} onChange={setrows}/>
                        <Title>Колличество покемонов</Title>
                        <Table rows={rows}/>
                    </Col>
                </Row>
            </Content>
            <Footer>
                Footer
            </Footer>
        </Layout>
    )
};

export default AppAnt;