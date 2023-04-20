import * as React from 'react';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import Airtable from 'airtable';
import { Inter } from 'next/font/google'
import { Container, Grid, Spacer } from "@nextui-org/react";
import { TaskCard } from "../components/TaskCard"

// require('dotenv').config()

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_MENU_BASE);
  const records = await base('Tasks').select({ view: 'MAIN' }).all();
  // console.log(JSON.stringify(records, null, 4))
  const fields = records
    .filter(item => Object.keys(item.fields).length !== 0) // exclude items where fields is empty
    .map(item => item.fields);
  // console.log(fields)

  return {
    props: {
      data: JSON.parse(JSON.stringify(fields)),
    },
  };
}

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      background: '#e3f5ff',
      primaryLight: '$green200',
      primaryLightHover: '$green300',
      primaryLightActive: '$green400',
      primaryLightContrast: '$green600',
      primary: '#4ADE7B',
      primaryBorder: '$green500',
      primaryBorderHover: '$green600',
      primarySolidHover: '$green700',
      primarySolidContrast: '$white',
      primaryShadow: '$green500',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd',


      // ...  more colors
    },
    space: {},
    fonts: {}
  }
})

export default function Home({ data }) {

  return (
    <NextUIProvider theme={theme}>
      <Container justify='center' display='flex' alignItems='center' >
        <Spacer y={2} />
        <Grid gap={2} sm={12} md={15}>
          <Spacer y={2} />
          {data.map((item, index) => (
            <>
              <TaskCard data={item} key={index} />
              <Spacer x={1} />
            </>

          ))}
        </Grid>
      </Container>
    </NextUIProvider >
  )
}
