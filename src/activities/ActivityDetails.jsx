import useQuery from "../api/useQuery";
import { useParams } from "react-router";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";

export default function ActivityDetails() {
  const { Activity } = useParams();

  const {
    data: activity,
    loading,
    error,
  } = useQuery(`/activities/${Activity}`, "activity");

  const {
    mutate: deleteActivity,
    loading: deleteLoading,
    error: deleteError,
  } = useMutation("DELETE", `/activities/${activity?.id ?? ""}`, [
    "activities",
  ]);

  const { token } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;
  if (!activity) return <p>Activity not found</p>;

  return (
    <>
      <h1>{activity.name}</h1>
      <p>{activity.description}</p>
      {token && (
        <button onClick={() => deleteActivity()}>
          {loading ? "Deleting" : error ? error : "Delete"}
        </button>
      )}
    </>
  );
}
