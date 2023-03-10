import { Request, Response } from 'express';

import { Ong } from '../../models/ong';

export const listOngs = async (req: Request, res: Response) => {
  const ongs = await Ong.find().populate({
    path: 'events',
    populate: { path: 'requiredSkills' }
  });

  return res.status(200).json(ongs);
};
