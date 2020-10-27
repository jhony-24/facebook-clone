import React from "react";
import faker from "faker";
import NewsFeedCard from "../components/NewsFeedCard";
import { FaGlobeAsia } from "react-icons/fa";
import Reactions from "src/components/Reactions";

const data = Array(10)
  .fill(0)
  .map((e, i) => ({
    user: {
      username: faker.name.firstName() + " " + faker.name.lastName(),
      avatar: faker.random.image(),
    },
    detail: {
      text: faker.address.county(),
      icon: FaGlobeAsia,
    },
    publication: {
      text: faker.lorem.paragraph(2),
      image: faker.random.image(),
    },
  }));

const NewsFeedExample = () => {
  return (
    <div>
      {data.map((e, i) => (
        <NewsFeedCard key={i}>
          <NewsFeedCard.Header user={e.user} detail={e.detail} />
          <Reactions.Like />
          <NewsFeedCard.Body {...e.publication} />
        </NewsFeedCard>
      ))}
    </div>
  );
};

export default NewsFeedExample;
