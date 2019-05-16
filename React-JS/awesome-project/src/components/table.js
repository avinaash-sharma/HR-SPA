import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from 'material-ui/core/styles';
import Table from 'material-ui/Table';
import TableCell from 'material-ui/core/TableCell'
import { Paper, TableHeader, TableRow, TableBody } from 'material-ui';
let id=o;
function createdata(name,jobprofile ,status,feedback){
id+=1;
return{id,name,jobprofile,status,feedback};
}
const rows=[
    createdata('abhishek','ICSUI','ROUND1','HELLO'),
    createdata('abhishek','ICSUI','ROUND1','HELLO'),
    createdata('abhishek','ICSUI','ROUND1','HELLO'),
    createdata('abhishek','ICSUI','ROUND1','HELLO'),
];
function customizedtable(props){
    const {classes}=props;
    return(
        <Paper className={classes.root}>
        <Table>
            <TableHead>
                <TableRow>
                    <customtablecell >NAME</customtablecell>
                    <customtablecell align="right">JOBPROFILE</customtablecell>
                    <customtablecell align="right">STATUS</customtablecell>
                    <customtablecell align="right">FEEDBACK</customtablecell>

                </TableRow>
            </TableHead>
        <TableBody>
            {rows.map(row=>(
                <TableRow className={classes.row} key={row.id}>
                    <customtablecell >{row.name}</customtablecell>
                    <customtablecell align="right">{row.jobprofile}</customtablecell>
                    <customtablecell align="right">{row.status}</customtablecell>
                    <customtablecell align="right">{row.feedback}</customtablecell>
 </TableRow>
            ))}
        </TableBody>
        </Table>
        </Paper>

        
    )
}
