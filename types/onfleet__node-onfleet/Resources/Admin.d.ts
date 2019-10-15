import { OnfleetMetadata } from "onfleet__node-onfleet/metadata";

export class Admin {
  get(): Promise<OnfleetAdmin[]>;
  create(obj: CreateAdminProps): Promise<OnfleetAdmin>;
  update(id: string, obj: UpdateAdminProps): Promise<OnfleetAdmin>;
  deleteOne(id: string): Promise<void>;
}

interface OnfleetAdmin {
  email: string;
  id: string;
  isActive: boolean;
  metadata: OnfleetMetadata;
  name:string;
  organization: string;
  phone: string;
  timeCreated: number;
  timeLastModified: number;
  type: 'super' | 'standard';
}

/**
 * @interface CreateAdminProps
 * @prop email - The administrator’s complete name.
 * @prop name - The administrator’s email address.
 * @prop phone - Optional. The administrator's phone number.
 * @prop isReadOnly - Optional. Whether this administrator can perform write operations.
 */
interface CreateAdminProps {
  email: string;
  name: string;
  phone?: string;
  isReadOnly?: boolean;
}

interface UpdateAdminProps {
 email?: string;
 metadata?: OnfleetMetadata;
 name?: string;
}