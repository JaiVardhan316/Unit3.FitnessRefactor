import useQuery from "../api/useQuery";
import { useParams } from "react-router";

export default function ActivityDetails() {
  const { Activity } = useParams();

  const {
    data: activities,
    loading,
    error,
  } = useQuery(`/Activities/${Activity}`, "activities");

  console.log(Activity);
  const activity = activities?.find((a) => a.id === Number(Activity));
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;

  return (
    <>
      <h1>{activity.name}</h1>
      <p>{activity.description}</p>
    </>
  );
}
