import { useDarkMode } from "@/components/Hooks/useDarkMode";
import Toggle from "@/components/Toggler";
import { useEffect } from "react";
import HeadSEO from "@/components/SEO/HeadSeo";
import LayoutSubpage from "@/components/Layout/Subpage";
import styled, { css, CSSProp } from "styled-components";
import SectionTitle from "@/components/SectionTitle";
import { tablet } from "@/components/theme/MediaQuery";
import Image from "next/image";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const AboutSection = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.body};
  overflow: auto;
  box-shadow: 0 1px 33px rgb(0 0 0 / 15%);
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 0);
  position: absolute;
  top: auto;
  padding: 10px 0;
  left: 0;
  transition: all 0.3s linear;
  ${tablet(css`
    padding: 20px;
  `)}
  color: ${({ theme }) => theme.psection};
`;

const BorderSection = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: transparent;
  top: 20px;
  left: 20px;
  transition: all 0.3s linear;
  border-left: 4px solid ${({ theme }) => theme.textglobal};
  border-top: 4px solid ${({ theme }) => theme.textglobal};
  ${tablet(css`
    display: none;
  `)}
`;

const SectionInner = styled.div`
  position: relative;
  padding: 20px 60px 50px;
  ${tablet(css`
    padding: 5px 20px;
  `)}
`;

const BoxImageHeader = styled.div`
  width: 100%;
  height: 270px;
  border-radius: 5px;
  transition: all 0.3s linear;
  background-color: ${({ theme }) => theme.bgavatar};
  padding: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${tablet(css`
    width: 100%;
  `)}
`;

const GridAbout = styled.div`
  margin-bottom: 30px;
`;

const TitleAbout = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.h3section};
`;

const TextAbout = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.psection};
`;

const UlInfo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LiInfo = styled.li`
  padding: 5px 0;
  font-size: 14px;
  &:first-child {
    padding-top: 0;
  }
`;

const borderSpanOne = css`
  &::after {
    transition: all 0.3s linear;
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    margin-top: -3px;
    background-color: ${({ theme }) => theme.textglobal};
  }
`;

const borderSpanTwo = css`
  &::after {
    transition: all 0.3s linear;
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    margin-top: -3px;
    background-color: ${({ theme }) => theme.textglobal};
  }
`;

interface SpanBorder {
  css: CSSProp;
}

const SpanInfoTitle = styled.span<SpanBorder>`
  font-size: 14px;
  color: ${({ theme }) => theme.h3section};
  font-weight: bold;
  margin-right: 12px;
  display: inline-block;
  transition: all 0.3s linear;
  ${(props) => props.css}
`;

const SpanInfoValue = styled.span`
  min-width: 250px;
`;

const AInfo = styled.a`
  color: ${({ theme }) => theme.textglobal};
  text-decoration: none;
  outline: none;
  transition: all 0.3s linear;
`;

const BlockTitle = styled.h1`
  display: inline-block;
  position: relative;
  margin: 0 0 20px;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.h3section};
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 2px;
    height: 100%;
    left: -10px;
    bottom: 0;
    background-color: ${({ theme }) => theme.textglobal};
  }
`;

const SocmedWrapper = styled.ul`
  display: flex;
  list-style: none;
  margin: 25px 0 5px;
  padding: 0;
  text-align: left;
  gap: 5px;
  flex-wrap: wrap;
`;

const ItemSocmed = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1px;
  width: 34px;
  height: 34px;
  color: ${({ theme }) => theme.psection};
  background-color: transparent;
  text-align: center;
  transition: all 0.3s linear;
  border: 1px solid ${({ theme }) => theme.borderlink};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.textglobal};
    color: white;
  }
`;

const ItemService = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const About = () => {
  return (
    <>
      <HeadSEO title="About" />
      <AboutSection>
        <BorderSection />
        <SectionInner>
          <SectionTitle
            title="Tentang Saya"
            textBadge="Web Developver, Mahasiswa"
          />
          <div className="row gx-5">
            <GridAbout className="col-sm-6 col-md-6 col-lg-4">
              <BoxImageHeader>
                <Image
                  width={250}
                  height={250}
                  alt="_image_avt"
                  src={"/images/avatar-img.png"}
                />
              </BoxImageHeader>
            </GridAbout>
            <div className="col-sm-6 col-md-6 col-lg-8 row">
              <div className="col-lg-6">
                <TitleAbout>Seorang mahasiswa sambil kerja</TitleAbout>
                <TextAbout>
                  Saya kerja part-time di salah satu perusahaan di Jakarta
                  sebagai Front-End Web Developer, memiliki pengalaman kurang
                  lebih 1 Tahun dibidang tersebut. Sebagai seorang developer
                  kita dituntut untuk selalu belajar hal baru, supaya bisa
                  mengikuti jaman.
                </TextAbout>
                <TextAbout>
                  Saya mahasiswa semester akhir di Universitas Islam kalimantan
                  Muhammad Arsyad Al-Banjari Banjarmasin, dengan jurusan Teknik
                  Informatika.
                </TextAbout>
              </div>
              <GridAbout className="col-lg-6">
                <UlInfo>
                  <LiInfo>
                    <SpanInfoTitle css={borderSpanOne}>Umur</SpanInfoTitle>
                    <SpanInfoValue>23 Tahun</SpanInfoValue>
                  </LiInfo>
                  <LiInfo>
                    <SpanInfoTitle css={borderSpanTwo}>Alamat</SpanInfoTitle>
                    <SpanInfoValue>
                      Jl. A Yani Km.22, Banjarbaru, Kalimantan Selatan
                    </SpanInfoValue>
                  </LiInfo>
                  <LiInfo>
                    <SpanInfoTitle css={borderSpanOne}>Negara</SpanInfoTitle>
                    <SpanInfoValue>Indonesia</SpanInfoValue>
                  </LiInfo>
                  <LiInfo>
                    <SpanInfoTitle css={borderSpanTwo}>Email</SpanInfoTitle>
                    <SpanInfoValue>
                      <AInfo href="mailto:ahmadinur2202@gmail.com">
                        ahmadinur2202@gmail.com
                      </AInfo>
                    </SpanInfoValue>
                  </LiInfo>
                  <LiInfo>
                    <SpanInfoTitle css={borderSpanTwo}>Nomor HP</SpanInfoTitle>
                    <SpanInfoValue>+62 878 0066 9682</SpanInfoValue>
                  </LiInfo>
                </UlInfo>
                <SocmedWrapper>
                  <li>
                    <ItemSocmed>
                      <FaTwitter size={20} />
                    </ItemSocmed>
                  </li>
                  <li>
                    <ItemSocmed>
                      <FaGithub size={20} />
                    </ItemSocmed>
                  </li>
                  <li>
                    <ItemSocmed>
                      <FaInstagram size={20} />
                    </ItemSocmed>
                  </li>
                  <li>
                    <ItemSocmed>
                      <FaFacebook size={20} />
                    </ItemSocmed>
                  </li>
                </SocmedWrapper>
              </GridAbout>
            </div>
          </div>
          <BlockTitle>Pelayanan</BlockTitle>
          <div className="row mt-3">
            <ItemService className="col-sm-6 col-md-3">
              <Image
                alt="_icon"
                width={100}
                height={100}
                src={"/images/web_icon.png"}
              />
              <TitleAbout className="mt-3">Web Developer</TitleAbout>
              <p>
                Melayani pembuatan website dari beberapa bahasa pemrograman,
                seperti PHP dan Javascript.
              </p>
            </ItemService>
            <ItemService className="col-sm-6 col-md-3">
              <Image
                alt="_icon"
                width={100}
                height={100}
                src={"/images/creativity_icon.png"}
              />
              <TitleAbout className="mt-3">Joki Tugas</TitleAbout>
              <p>
                Melayani pengerjaan tugas sekolah dan kampus yang berkaitan dengan bidang IT.
              </p>
            </ItemService>
          </div>
        </SectionInner>
      </AboutSection>
    </>
  );
};

export default About;
