import { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import axios from 'axios';

const AssetListPage = () => {

  const columns = useMemo(
    () => [
      {accessorKey: 's.no',header: 'S.No',size: 90,isResizable: true,Cell: ({ cell }) => cell.row.index + 1,},
      
      {accessorKey: 'name',header: 'Name',size: 130,isResizable: true,enableSorting: true,},

      {accessorKey: 'assettagid',header: 'Asset Tag ID',size: 135,isResizable: true,enableSorting: true,},
      
      {accessorKey: 'purchasefrom',header: 'Purchased From',size: 140,isResizable: true,enableSorting: true,},

      {accessorKey: 'brand',header: 'Brand',size: 125,isResizable: true,enableSorting: true,},

      {accessorKey: 'model',header: 'Model',size: 130,isResizable: true,enableSorting: true,},

      {accessorKey: 'serialno',header: 'Serial No',size: 140,isResizable: true,enableSorting: true,},

      {accessorKey: 'status',header: 'Status',size: 123,isResizable: true,enableSorting: true,},

      {accessorKey: 'assignmode',header: 'Assign Mode',size: 123,isResizable: true,enableSorting: true,},

      {accessorKey: 'remarks',header: 'Remarks.',size: 140,isResizable: true,enableSorting: true,},
    ],
    [],
  );
  const [data, setData] = useState([]);
  const items= data.reverse()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/get-asset-posts');
        setData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 
    fetchData();
  }, []);

console.log("datadatadatadata",data.data)

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnOrdering: true,
    enableGrouping: true,
    columnFilterDisplayMode:'popover',
    initialState: { pagination: { pageSize: 5 } }, 
  });

  return (
    <div style={{width:'1135px',}}>
    <MaterialReactTable table={table} />
    </div>
  )
};

export default AssetListPage;
