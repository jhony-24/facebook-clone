import { useAtomValue } from "jotai";
import { topicsAtom } from "../../../stores/topics.store";
import ListOfHelpTopicList from "../../../components/ListOfHelpTopicList";

const HelpTopicsList = () => {
  const topics = useAtomValue(topicsAtom);
  return <ListOfHelpTopicList data={topics} />;
};

export default HelpTopicsList;
