import * as React from 'react';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import Airtable from 'airtable';
import { Inter } from 'next/font/google'
import { Container, Grid, Spacer, Button } from "@nextui-org/react";
import Link from 'next/link';
import { theme } from '../constants/colors'

// require('dotenv').config()

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  return (
    <NextUIProvider theme={theme}>
      <Grid.Container justify='center' display='flex' alignItems='center' gap={2}>
        <Grid>
          <Link href='/tasks'>
            <Button>Tasks</Button>
          </Link>
        </Grid>
        <Grid>
          <Link href="/lluf">
            <Button>LLUF</Button>
          </Link>
        </Grid>
      </Grid.Container>
    </NextUIProvider >
  )
}
