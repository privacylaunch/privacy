import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
const App = (props) => {
  return (
    <Wrapper className="pt-4">
      <h1 className="text-center mb-5">Privacy</h1>
      <div className="section">
        <h4>Conditions of use:</h4>
        <p>
          The summary Hello. You should read these terms in full because they
          apply every time you visit partylive and use any of its features.
          However, just in case you ever need a reminder of the main points,
          here's a quick summary:
          <br /> 1, If you are under the age of 18 then unfortunately you can't
          use partylive yet because it's a meeting place for adults only.
          <br /> 2, you're not responsible for anything that you post or say
          while you are on partylive and we don't monitor the content of the
          site ,but If we do see or someone alarts us that you have posted
          something that we think is inappropriate then we are allowed at our
          discretion to remove it.
          <br /> 3, If you post any content that actually belongs to someone
          else and they get annoyed (for even call in their lawyers) we are not
          in the firing line. You have to take responsibility for what you post.
          <br />
          4, please reffer to our community guidelines and safety tips for
          additional Dos and Don'ts and information on styling safe. <br />
          <h4 className="mt-3">Privacy policy:</h4>
          What information does partylive process? <br />
          Partylive is meeting place for adults, and we provide that service by
          operating a social network site offering users by joining partylive ,
          you enter a legal agreement with us and we process your data in order
          to provide your service under the terms of that agreement. You can
          only became a number of partylive or use its features if you're aged
          18 + To join the partylive network you will have to complete our
          online registration form , where we may ask you to provide us with
          information about you such as your name, your email address, your
          gender, your date of birth, your location details. You also have the
          opportunity to provide other details about yourself, but these are
          optional. Because you control your user profile these details are
          available to you at any time by accessing your profile page, which
          gives you the chance to correct or update (other than your email
          address or gender) your information at any time by just logging in to
          partylive. Please be careful about posting sensitive details about
          yourself on your Profile such as your religious denomination and
          health details. While you may voluntarily provide this information to
          us when you create your Profile, including your sexual preferences and
          ethnic background, there is no requirement to do so. Please remember
          that photographs or any video clips that you post on Wheru may reveal
          these kinds of sensitive personal data. Where you do upload and choose
          to tell us sensitive data about yourself, you are explicitly
          consenting to our processing your information and making this public
          to other users. For safety and security and to ensure you have the
          best possible user experience, we require users to verify their
          accounts and might ask for your phone number. We want to make sure you
          are not a robot! And we also want to avoid fake accounts being created
          which can be used for malicious activities and cyber crime – they
          threaten the Wheru network and spoil things for everyone. We use a
          third party provider for account verification who will keep your phone
          number for up to 90 days for fraud identification purposes. We collect
          and use your phone number on the basis of our legitimate interests
          identified above and for the prevention of fraud. To prevent abuse of
          the app/site, partylive uses automated decisions and moderators to
          block accounts as part of its moderation procedures. In order to do
          this, we check accounts and messages for content that indicates
          breaches of our Terms and Conditions of Use. This is done through a
          combination of automated systems and our team of moderators. If an
          account or message meets certain criteria that demonstrate that the
          Terms and Conditions of Use are likely to have been breached, the
          relevant account will automatically be blocked. All users of accounts
          that have been blocked will be notified that their account has been
          blocked and affected users can contact Wheru to contest the decision.
          Finally, we want to keep in touch with you to make sure you know about
          the great promotions and offers we have available. If you’ve told us
          it’s OK, we will use your email address and phone number to send you
          information on these. You can withdraw this consent at any time via
          Settings in the app or website.
          <br />
          <br />
          What is the legal basis that allows partylive to use my data?
          <br />
          We are only permitted to use your data when we have a lawful basis to
          do so. The table below provides an overview of the legal bases that
          partylive relies on to use your data. Where the legal basis is
          consent, you can withdraw consent at any time. Where the legal basis
          is legitimate interests, you have a right to object to our use of your
          data. We explain in the relevant sections in this privacy notice how
          you can withdraw consent or opt-out of certain data uses (where
          applicable).
          <br />
          <br />
          What information does partylive collect about me if I’m under 18?
          <br />
          Partylive does not knowingly collect any information about or market
          to children, minors or anyone under the age of majority. If we become
          aware that a child, minor or anyone under the age of 18 has registered
          with us and provided us with personal data, we will take steps to
          terminate that person’s registration and delete their Profile
          information from partylive. If we do delete a Profile because you
          violated our no children rules, we may retain your email and IP
          address to ensure that you do not try to get around our rules by
          creating a new Profile.
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .section {
    width: 80%;
    margin: 0 auto;
  }
`;
export default App;
