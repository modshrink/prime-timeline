<p><?php echo sprintf( 'Total execution time (%.2f msec)', $exec); ?></p>
<table class="wp-list-table widefat fixed pages">
<p><?php echo sprintf( __( 'Total execution time (%.2f msec)', 'prime-timeline' ), $exec ); ?></p>
<table class="wp-list-table widefat fixed pages">
	<tbody>
		<tr id='ps_tr_head'>
			<th width='5%'>No.</th>
			<th width='5%'>Total<br />(msec)</th>
			<th width='10%'>Type</th>
			<th width='5%'>File</th>
			<th width='30%'>Hook/SQL</th>
			<th width='30%'>Detail</th>
			<th width='5%'>Count</th>
			<th width='5%'>Diff<br />(msec)</th>
			<th width='5%'>This<br />(msec)</th>
			<th width='5%'><?php _e( 'No.', 'prime-timeline' ); ?></th>
			<th width='5%'><?php _e( 'Total', 'prime-timeline' ); ?><br />(msec)</th>
			<th width='10%'><?php _e( 'Type', 'prime-timeline' ); ?></th>
			<th width='5%'><?php _e( 'File', 'prime-timeline' ); ?></th>
			<th width='30%'><?php _e( 'Hook/SQL', 'prime-timeline' ); ?></th>
			<th width='30%'><?php _e( 'Detail', 'prime-timeline' ); ?></th>
			<th width='5%'><?php _e( 'Count', 'prime-timeline' ); ?></th>
			<th width='5%'><?php _e( 'Diff', 'prime-timeline' ); ?><br />(msec)</th>
			<th width='5%'><?php _e( 'This', 'prime-timeline' ); ?><br />(msec)</th>
		</tr>
