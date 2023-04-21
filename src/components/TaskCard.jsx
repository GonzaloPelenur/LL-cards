import { Container, Card, Grid, Text, Button, Row, Spacer, Badge, Col } from "@nextui-org/react";
import { target_to_color, tool_to_color, theme } from "../constants/colors";
export const config = { unstable_fastRefresh: false }

// console.log(process.cwd())
export function TaskCard(prop) {
    // console.log(data)
    const { Name, Target, Description, Deadline, Tools } = prop.data;
    const deadline_f = new Date(Deadline);
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const utcDeadline = deadline_f.toISOString();
    const localDeadline = new Date(utcDeadline).toLocaleDateString('en-US', { ...dateOptions, timeZone: 'UTC' });

    return (

        <Card css={{ mw: "440px" }} >
            <Card.Header>
                <Grid.Container>
                    {/* <Badge css={{ bgColor: "red" }}>TEST</Badge> */}
                    <Row>
                        <Text h2>{Name}</Text>
                    </Row>
                    <Row>
                        <Badge size="sm" color="primary" variant="flat">{localDeadline}</Badge>
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
                            <Row >
                                <Text h3>Available For</Text>
                            </Row>
                            <Row>
                                <Grid.Container gap={0.5}>
                                    {Target.map((item, index) => (
                                        <Grid key={index + 100}>
                                            <Badge color={target_to_color[item]}>{item}</Badge>
                                            <Badge css={{ bgColor: theme.colors["hola"] }}>{item}</Badge>
                                        </Grid>
                                    ))}
                                </Grid.Container>
                            </Row>
                        </Grid>
                    </Row>
                    <Row>
                        <Grid>
                            <Row >
                                <Text h3>Tools</Text>
                            </Row>
                            <Row>
                                <Grid.Container gap={0.5}>
                                    {Tools.map((item, index) => (
                                        <Grid key={index + 200}>
                                            <Badge color={tool_to_color[item]}>{item}</Badge>
                                            <Badge css={{ bgColor: theme.colors[item] }}>{item}</Badge>
                                        </Grid>
                                    ))}
                                </Grid.Container>
                            </Row>
                        </Grid>
                    </Row>
                </Grid.Container>
            </Card.Body>
        </Card >

    );
}