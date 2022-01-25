import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Deeved" },
    { id: 2, name: "Natalia" },
  ];

  return response.json(users);
};
