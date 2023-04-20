import { Container, Card, Grid, Text, Button, Row, Spacer, Badge, Col } from "@nextui-org/react";
export const config = { unstable_fastRefresh: false }

const target_to_color = {
    "LLUF": "secondary",
    "MPA": "warning",
    "MDA": "primary"
}

const tool_to_color = {
    "Photoshop": "primary",
    "After Effects": "secondary",
    "Blender": "success",
    "React": "warning",
    "Figma": "error",
    "Canva": "primary",
    "Illustrator": "secondary"
}
// console.log(process.cwd())
export function TaskCard(prop) {
    // console.log(data)
    const { Name, Target, Description, Deadline, Tools } = prop.data;
    var deadline_f = new Date(Deadline);
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    return (

        <Card css={{ mw: "440px" }} >
            <Card.Header>
                <Grid.Container>
                    <Row>
                        <Text h2>{Name}</Text>
                    </Row>
                    <Row>
                        <Badge size="sm" color="primary" variant="flat">{deadline_f.toLocaleDateString('en-US', dateOptions)}</Badge>
                    </Row>
                </Grid.Container>

            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
                <Grid.Container gap={1}>
                    <Row>
                        <Grid>
                            <Text h4>
                                {Description}
                            </Text>
                        </Grid>
                    </Row>
                    <Row>
                        <Grid>
                            <Grid.Container>

                                <Row >
                                    <Text h3>Available For</Text>
                                </Row>
                                <Row>
                                    {Target.map((item, index) => (
                                        <Grid>
                                            <Badge color={target_to_color[item]}>{item}</Badge>
                                        </Grid>
                                    ))}
                                </Row>


                            </Grid.Container>
                        </Grid>
                    </Row>
                    <Row>
                        <Grid>
                            <Grid.Container>

                                <Row >
                                    <Text h3>Tools</Text>
                                </Row>
                                <Row>
                                    {Tools.map((item, index) => (
                                        <Grid>
                                            <Badge color={tool_to_color[item]}>{item}</Badge>
                                        </Grid>
                                    ))}
                                </Row>


                            </Grid.Container>
                        </Grid>
                    </Row>

                </Grid.Container>

            </Card.Body>

        </Card >

    );
}