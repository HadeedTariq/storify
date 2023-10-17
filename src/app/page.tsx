import { getAuthSession } from "@/utils/authOptions";

export default async function Home() {
  const session = await getAuthSession();

  return <></>;
}
