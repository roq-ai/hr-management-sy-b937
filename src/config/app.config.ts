interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee'],
  tenantName: 'Company',
  applicationName: 'HR Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View user information', 'View company information'],
  ownerAbilities: ['Manage users', 'Manage companies'],
  getQuoteUrl: 'https://app.roq.ai/proposal/0c986130-a909-44ab-bae6-569fa8f49f13',
};
