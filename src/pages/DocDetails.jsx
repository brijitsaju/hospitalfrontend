import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button, Container, Form, Navbar } from 'react-bootstrap';
import TakeApoint from '../components/TakeApoint';
import { displayDoctors } from '../services/allAPI';
import { BASE_URL } from '../services/baseurl';
import AOS from 'aos';
import 'aos/dist/aos.css';

function DocDetails() {
  const [displayDoc, setDisplayDoc] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getalldoctors = async () => {
    if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token');
      const reqheader = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
      const result = await displayDoctors(reqheader);
      console.log(result.data);
      if (result.status === 200) {
        setDisplayDoc(result.data);
        console.log(displayDoc);
      }
    }
  };

  useEffect(() => {
    getalldoctors();
  }, []);

  console.log(displayDoc);

  const filteredDoctors = displayDoc.filter((item) =>
    item.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar className="bg-body-tertiary " expand="lg">
        <Navbar.Brand className='ps-5'>Find your Doctor</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Container>
            <Form className="m-3 ml-auto ">
              <Form.Control
                type="text" className='w-50'
                placeholder="Search Departments"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form>
          </Container>
        </Navbar.Collapse>
      </Navbar>

      <Container className='mt-5'>
        <Row xs={1} md={4} className="g-4">
          {filteredDoctors?.map((item, index) => (
            <Col key={index} md={3}>
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100}>
                <Card className="mb-4" style={{ boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px', position: 'relative' }}>
                  <Card.Img
                    variant="top"
                    src={item.docImage ? `${BASE_URL}/uploads/${item.docImage}` : 'https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png'}
                    alt=""
                    className="img-fluid rounded-top"
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title className="text-dark">{item.name}</Card.Title>
                    <Card.Text>{item.department}</Card.Text>
                    <TakeApoint docname={item} />
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>

        {filteredDoctors?.length === 0 && (
          <p className="text-danger fw-bolder fs-5">No matching doctors found</p>
        )}
      </Container>
    </>
  );
}

export default DocDetails;
