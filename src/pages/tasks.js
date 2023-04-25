import * as React from 'react';
import { NextUIProvider, createTheme, Card } from '@nextui-org/react';
import Airtable from 'airtable';
import { Inter } from 'next/font/google'
import { Container, Grid, Spacer } from "@nextui-org/react";
import { TaskCard } from "../components/TaskCard"
import { theme } from '../constants/colors'
import { CardWrapper } from 'cards/components/CardWrapper';

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

export default function Tasks({ data }) {

  return (
    <NextUIProvider theme={theme}>
      <Container justify='center' display='flex' alignItems='center' >
        <Spacer y={2} />
        <Grid gap={2} sm={12} md={15}>
          <Spacer y={2} />
          {data.map((item, index) => (
            <>
              <TaskCard data={item} key={index} />
              <Spacer x={3} />
            </>
          ))}
        </Grid>
      </Container>
    </NextUIProvider >
  )
}
