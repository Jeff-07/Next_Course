import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsFeature extends Struct.ComponentSchema {
  collectionName: 'components_components_features';
  info: {
    description: '';
    displayName: 'Feature';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['CLOCK_ICON', 'CHECK_ICON', 'CLOUD_ICON']
    >;
    subHeading: Schema.Attribute.Text;
  };
}

export interface ComponentsFooter extends Struct.ComponentSchema {
  collectionName: 'components_components_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logoText: Schema.Attribute.Component<'components.link', false>;
    socialLink: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface ComponentsHeader extends Struct.ComponentSchema {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'components.link', false>;
    logoText: Schema.Attribute.Component<'components.link', false>;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsThreeValueTable extends Struct.ComponentSchema {
  collectionName: 'components_components_three_value_tables';
  info: {
    description: '';
    displayName: 'three_value_table';
    icon: 'bulletList';
  };
  attributes: {
    value_1: Schema.Attribute.String;
    value_2: Schema.Attribute.String;
    value_3: Schema.Attribute.String;
  };
}

export interface LayoutFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_features_sections';
  info: {
    description: '';
    displayName: 'Features Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'components.feature', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    description: '';
    displayName: 'Hero Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'components.link', false>;
    subHeading: Schema.Attribute.Text;
  };
}

export interface LayoutTableSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_table_sections';
  info: {
    description: '';
    displayName: 'Table-Section';
    icon: 'apps';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.String;
    isEditable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subHeading: Schema.Attribute.Text;
    tableHeading: Schema.Attribute.Component<
      'components.three-value-table',
      false
    >;
    tableValues: Schema.Attribute.Component<
      'components.three-value-table',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.feature': ComponentsFeature;
      'components.footer': ComponentsFooter;
      'components.header': ComponentsHeader;
      'components.link': ComponentsLink;
      'components.three-value-table': ComponentsThreeValueTable;
      'layout.features-section': LayoutFeaturesSection;
      'layout.hero-section': LayoutHeroSection;
      'layout.table-section': LayoutTableSection;
    }
  }
}
