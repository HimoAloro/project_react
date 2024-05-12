type Props = {
    message: string;
};

export const Welcome = (props:Props) => {
  return (
  <>
  <div>{props.message}</div>
  < a href="/PostList">Forum</a>
  </>
  )
};
