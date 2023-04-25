import { Container, Image, Card, Grid, Text, Button, Row, Spacer, Badge, Col } from "@nextui-org/react";
import { tool_to_color, theme } from "../constants/colors";
export const config = { unstable_fastRefresh: false }
import { CardWrapper } from "./CardWrapper";
import styles from '../styles/BioCard.module.css'

// console.log(process.cwd())
export function TaskCard(prop) {
    // console.log(data)
    const { Name, Target, Description, Deadline, Tools, Length } = prop.data;
    const deadline_f = new Date(Deadline);
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const utcDeadline = deadline_f.toISOString();
    const localDeadline = new Date(utcDeadline).toLocaleDateString('en-US', { ...dateOptions, timeZone: 'UTC' });
    const icon = "/icon.svg";
    return (

        <CardWrapper >
            <Card.Header>
                <Grid.Container direction="column" gap={0}>
                    {/* <Badge css={{ bgColor: "red" }}>TEST</Badge> */}
                    <Grid >
                        <Text h2>{Name}</Text>
                    </Grid>
                    <Grid>
                        <Grid.Container gap={1}>
                            <Grid>
                                <Badge size="sm" color="primary" variant="flat">{localDeadline}</Badge>

                            </Grid>
                            <Grid>
                                <Badge size="sm" color="primary" variant="flat">{Length}</Badge>

                            </Grid>
                        </Grid.Container>
                    </Grid>



                </Grid.Container>

            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
                <Grid.Container gap={1} >
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
                                {/* <Text h3>Available For</Text> */}
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Image src={icon} alt="icon" width={24} height={24} />
                                    <Text h3>Available For</Text>
                                </div>
                            </Row>

                            <Row>
                                <Grid.Container gap={0.5}>
                                    {Target.map((item, index) => (
                                        <Grid key={index + 100}>
                                            <Badge size="lg" css={{ bgColor: theme.colors[item] }}>{item}</Badge>
                                        </Grid>
                                    ))}
                                </Grid.Container>
                            </Row>
                        </Grid>
                    </Row>
                    <Row>
                        <Grid>
                            <Row >
                                <Grid.Container gap={1}>
                                    <Grid alignItems="center" css={{ display: "flex" }}>
                                        <Image src={icon} alt="icon" width={24} height={24} />
                                    </Grid>
                                    <Grid alignItems="center" css={{ display: "flex" }}>
                                        <Text h3>Tools</Text>
                                    </Grid>
                                </Grid.Container>
                            </Row>
                            <Row>
                                <Grid.Container gap={0.5}>
                                    {Tools.map((item, index) => (
                                        <Grid key={index + 200}>
                                            <Badge size="lg" css={{ bgColor: theme.colors[tool_to_color[item]] }}>{item}</Badge>
                                        </Grid>
                                    ))}
                                </Grid.Container>
                            </Row>
                        </Grid>
                    </Row>
                </Grid.Container>
            </Card.Body>
        </CardWrapper>

    );
}