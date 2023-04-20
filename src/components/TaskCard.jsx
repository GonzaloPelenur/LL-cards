import { Container, Card, Grid, Text, Button, Row, Spacer, Badge, Col } from "@nextui-org/react";
import Image from "next/image"
import photoshopPic from "../images/photoshop.png"
import dinoPic from "../images/dino.jpeg"
export const config = { unstable_fastRefresh: false }


const list = [
    {
        title: "Photoshop",
        img: photoshopPic,
        price: "",
    },
    {
        title: "Blender",
        img: photoshopPic,
        price: "",
    }
];
// console.log(process.cwd())
export function TaskCard(prop) {
    // console.log(data)
    const { Name, Target, Description, Deadline } = prop.data;
    var deadline_f = new Date(Deadline);
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    return (

        <Card css={{ mw: "440px" }}>
            <Card.Header>
                <Text h2>{Name}</Text>

            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
                <Text h4>Deadline:</Text>
                <Badge>{deadline_f.toLocaleDateString('en-US', dateOptions)}</Badge>
                <Spacer y={1} />
                <Text h5>
                    {Description}
                </Text>
                {/* <Image
                    src={dinoPic}
                    alt="Dino"
                    width={300}
                    height={200}
                /> */}
                <Spacer y={1} />
                <Card>
                    <Card.Body>
                        <Text h3>Available for:</Text>
                        {Target.map((item, index) => (
                            <Badge>{item}</Badge>
                        ))}

                    </Card.Body>
                </Card>
            </Card.Body>
            <Card.Divider />
            <Card.Footer>
                <Container>
                    <Row>

                        {list.map((item, index) => (

                            <Col key={index}>
                                <Image src={item.img}
                                    alt={item.title}
                                    width={50}
                                    height={50} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Card.Footer>
        </Card >

    );
}