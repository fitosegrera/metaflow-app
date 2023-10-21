/* eslint-disable react/no-unescaped-entities */
// COMPONENTS
import { MainLayout, Container, Text, Button } from "@metaflow/components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();

  return (
    <MainLayout py={32} px={16}>
      <Container variant="flexColCenter" className="w-full gap-[40px]">
        <Container variant="flexColCenter">
          <Text variant="default" type="h1" className="geo-font">
            Sign Up
          </Text>
        </Container>
      </Container>
    </MainLayout>
  );
}
