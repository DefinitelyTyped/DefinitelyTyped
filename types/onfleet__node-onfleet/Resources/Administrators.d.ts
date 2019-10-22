import { OnfleetMetadata } from '../metadata';

declare class Admin {
  create(obj: Admin.CreateAdminProps): Promise<Admin.OnfleetAdmin>;
  deleteOne(id: string): Promise<void>;
  get(): Promise<Admin.OnfleetAdmin[]>;
  update(id: string, obj: Admin.UpdateAdminProps): Promise<Admin.OnfleetAdmin>;
}

declare namespace Admin {
  interface OnfleetAdmin {
    email: string;
    id: string;
    isActive: boolean;
    metadata: OnfleetMetadata;
    name: string;
    organization: string;
    phone: string;
    timeCreated: number;
    timeLastModified: number;
    type: 'super' | 'standard';
  }

  /**
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
}

export = Admin;
