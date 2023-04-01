import { Request, Response } from 'express';

import { Admin } from '../../models/admin';

import { removeProfilePic } from '../../utils/helpers';

export const removeAdmin = async (req: Request, res: Response) => {
  const { adminId } = req.params;

  const admin = await Admin.findById(adminId);
  await Admin.findByIdAndDelete(adminId);

  if (admin) {
    removeProfilePic(admin.profilePic);
    return res.sendStatus(204);
  }

  return res.status(404).send({ error: 'Admin not found' });
};
