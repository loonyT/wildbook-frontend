import fieldTypes from './fieldTypes';

export default [
  {
    id: 'siteName',
    name: 'siteName',
    labelId: 'SITE_NAME',
    descriptionId: 'SITE_NAME_DESCRIPTION',
    fieldType: fieldTypes.string,
    required: true,
    defaultValue: '',
  },
  {
    id: 'needsSetup',
    name: 'needsSetup',
    fieldType: fieldTypes.bool,
    hidden: true,
    defaultValue: true,
  },
  {
    id: 'private',
    name: 'private',
    labelId: 'PRIVATE_SITE',
    descriptionId: 'PRIVATE_SITE_DESCRIPTION',
    fieldType: fieldTypes.boolean,
    required: true,
    defaultValue: false,
  },
  {
    id: 'googleApiKey',
    name: 'googleApiKey',
    labelId: 'GOOGLE_API_KEY',
    descriptionId: 'GOOGLE_API_KEY_DESCRIPTION',
    fieldType: fieldTypes.string,
    required: false,
    defaultValue: '',
  },
  {
    id: 'lightBackgroundLogo',
    name: 'lightBackgroundLogo',
    labelId: 'WHITE_BG_LOGO',
    descriptionId: 'WHITE_BG_LOGO_DESCRIPTION',
    fieldType: fieldTypes.file,
    allowedFileTypes: ['.jpg', '.jpeg', '.png'],
    defaultValue: null,
  },
  {
    id: 'darkBackgroundLogo',
    name: 'darkBackgroundLogo',
    labelId: 'DARK_BG_LOGO',
    descriptionId: 'DARK_BG_LOGO_DESCRIPTION',
    fieldType: fieldTypes.file,
    allowedFileTypes: ['.jpg', '.jpeg', '.png'],
    defaultValue: null,
  },
  {
    id: 'footerLogo',
    name: 'footerLogo',
    labelId: 'FOOTER_LOGO',
    descriptionId: 'FOOTER_LOGO_DESCRIPTION',
    fieldType: fieldTypes.file,
    allowedFileTypes: ['.jpg', '.jpeg', '.png'],
    defaultValue: null,
  },
  {
    name: 'regions',
    labelId: 'REGIONS',
    descriptionId: 'REGIONS_DESCRIPTION',
    fieldType: fieldTypes.treeeditor,
    defaultValue: [],
  },
  {
    id: 'sightingFields',
    name: 'sightingFields',
    labelId: 'SIGHTING_FIELDS',
    descriptionId: 'SIGHTING_FIELDS_DESCRIPTION',
    fieldType: fieldTypes.fieldset,
    defaultValue: [],
  },
  {
    id: 'individualFields',
    name: 'individualFields',
    labelId: 'INDIVIDUAL_FIELDS',
    descriptionId: 'INDIVIDUAL_FIELDS_DESCRIPTION',
    fieldType: fieldTypes.fieldset,
    defaultValue: [],
  },
];