import { Card, CardSection, Text, Title } from '@mantine/core';

const PostCard = () => {
  return (
    <Card>
      <CardSection>
        <Title order={3}>Post Title</Title>
      </CardSection>
      <CardSection>
        <Text>Post Content</Text>
      </CardSection>
    </Card>
  );
};

export default PostCard;
