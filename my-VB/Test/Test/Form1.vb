Imports System.Data
Imports System.Data.OleDb

Public Class Form1


    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Dim con As New OleDbConnection("Provider=Microsoft.ACE.OLEDB.12.0;Data Source=C:\xampp\htdocs\xampp\try\my-VB\DataVB.accdb;Jet OLEDB:Database Password=Omar2011")
        Dim da As New OleDbDataAdapter("select * from user", con)
        Dim dt As New DataTable()
        da.Fill(dt)
        DataGridView1.DataSource = dt
    End Sub
End Class
