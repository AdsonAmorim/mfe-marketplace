import React from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const About = dynamic(() => import("secondary/about"), {
  ssr: false,
});

export default About;
