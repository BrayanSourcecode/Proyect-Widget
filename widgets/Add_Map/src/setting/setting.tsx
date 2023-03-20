import { React, Immutable, UseDataSource ,DataSourceTypes,DataSource} from 'jimu-core';
import { AllWidgetSettingProps } from 'jimu-for-builder';
import { IMConfig } from '../config'

import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector';

export default class Setting extends React.PureComponent<AllWidgetSettingProps<IMConfig>,{}>{
  supportedTypes = Immutable([DataSourceTypes.FeatureLayer]);

  onDataSourceSelected = (useDataSources: UseDataSource[]) => {
    console.log('Selected data source:', useDataSources);
    this.props.onSettingChange({
      id: this.props.id,
      useDataSources: useDataSources
    });
    
  }
  
  render() {

    return (
      <div className="p-3">
        <DataSourceSelector
         mustUseDataSource
          types={this.supportedTypes}
          useDataSources={this.props.useDataSources}
          onChange={this.onDataSourceSelected}
          widgetId={this.props.id}
        />
      </div>
    )
  }
}