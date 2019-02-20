import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import Header from "../components/Header";
import initStore from "../store";

export default withRedux(initStore, {
  debug: typeof window !== "undefined" && process.env.NODE_ENV !== "production"
})(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          // Call page-level getInitialProps
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <Head>
            <title>Next js</title>
          </Head>
          <Provider store={store}>
            <Header />
            <Component {...pageProps} />
          </Provider>
        </Container>
      );
    }
  }
);
