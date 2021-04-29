import { Heading, Text, VStack } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import React, { FC } from "react";
import GameCard from "../../components/games/game-card";
import PageContainer from "../../components/page-container";
import { Game } from "../../types";
import { getAllGames } from "../../util/games";

type Props = { games: Game[] };

const GamesIndex: FC<Props> = ({ games }) => (
  <PageContainer>
    <VStack>
      <Heading fontSize="3xl" p={3}>
        GAMES THAT <i>DON'T</i> EXIST
      </Heading>
      <Text>Below is a list of video games generated by A.I.</Text>
      <VStack w="100%">
        {games.map((game, idx) => (
          <GameCard key={idx} game={game} w="100%" />
        ))}
      </VStack>
    </VStack>
  </PageContainer>
);

export default GamesIndex;

export const getStaticProps: GetStaticProps = async () => {
  const games = getAllGames();

  return {
    props: {
      games,
    },
  };
};
